const { google } = require("googleapis");
// const OAuth2 = google.auth.OAuth2;
const calendar = google.calendar("v3");
/**
 * SCOPES allows you to set access levels; this is set to readonly for now because you don't have access rights to
 * update the calendar yourself. For more info, check out the SCOPES documentation at this link: https://developers.google.com/identity/protocols/oauth2/scopes
 */
const SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"];

/**
 * Credentials are those values required to get access to your calendar. If you see “process.env” this means
 * the value is in the “config.json” file. This is a best practice as it keeps your API secrets hidden. Please remember to add “config.json” to your “.gitignore” file.
 */
const credentials = {
  client_id: process.env.CLIENT_ID,
  project_id: process.env.PROJECT_ID,
  client_secret: process.env.CLIENT_SECRET,
  calendar_id: process.env.CALENDAR_ID,
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  redirect_uris: ["https://mayjessican.github.io/meet"],
  javascript_origins: [
    "https://mayjessican.github.io",
    "http://localhost:3000",
  ],
};
const { client_secret, client_id, redirect_uris, calendar_id } = credentials;
const oAuth2Client = new google.auth.OAuth2(
  client_id,
  client_secret,
  redirect_uris[0]
);

/**
 *
 * The first step in the OAuth process is to generate a URL so users can log in with
 * Google and be authorized to see your calendar. After logging in, they’ll receive a code
 * as a URL parameter.
 *
 */
module.exports.getAuthURL = async () => {
  // This is the call to generate the link and get the authorization code, very simple for the first step
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
  });
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      authUrl: authUrl,
    }),
  };
};

module.exports.getAccessToken = async (event) => {
  // The values used to instantiate the OAuthClient are at the top of the file
  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );
  // Get authorization code from the URL query
  const code = decodeURIComponent(`${event.pathParameters.code}`);

  return new Promise((resolve, reject) => {
    /**
     *  Exchange authorization code for access token with a “callback” after the exchange,
     *  The callback in this case is an arrow function with the results as parameters: “err” and “token.”
     */

    oAuth2Client.getToken(code, (err, token) => {
      if (err) {
        return reject(err);
      }
      return resolve(token);
    });
  })
    .then((token) => {
      // Then Respond with OAuth token to the client
      return {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(token),
      };
    })
    .catch((err) => {
      // Handle error
      console.error(err);
      return {
        statusCode: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(err),
      };
    });
};

module.exports.getCalendarEvents = async (input) => {
  // The values used to instantiate the OAuthClient are at the top of the file
  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    calendar_id,
    redirect_uris[0]
  );
  // Get authorization code from the URL query
  const access_token = decodeURIComponent(
    `${input.pathParameters.access_token}`
  );

  oAuth2Client.setCredentials({ access_token }); // Here is where we set the access_token

  return new Promise((resolve, reject) => {
    // Then we can call the calendar events API
    calendar.events.list(
      {
        //calendarId: calendar_id,
        calendarId: 'fullstackwebdev@careerfoundry.com',
        auth: oAuth2Client,
        timeMin: new Date().toISOString(),
        maxResults: 32,
        singleEvents: true,
        orderBy: "startTime",
      },
      (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      }
    );
  })
    .then((results) => {
      // Respond with calendar events
      return {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ events: results.data.items }),
      };
    })
    .catch((err) => {
      // Handle error
      console.error(err);
      return {
        statusCode: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(err),
      };
    });
};