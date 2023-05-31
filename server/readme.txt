CORS:
CORS (Cross-Origin Resource Sharing) is a security mechanism implemented in web browsers to control cross-origin requests. It allows web applications running on one domain to request
resources from another domain. By default, web browsers enforce a same-origin policy, which means that web pages can only make requests to the same origin (protocol, domain, and port)
from which they were loaded.

CORS is necessary when you have a frontend application running on a different domain or port than your backend API. If your frontend and backend are running on different origins,
the browser will block requests made from the frontend to the backend due to the same-origin policy. Without CORS, the browser will raise a security error, preventing your frontend
from accessing the resources (API endpoints) on the backend.

Enabling CORS in your backend application allows the browser to make cross-origin requests to your API. It adds the necessary HTTP headers to the server's responses,
indicating which origins are allowed to access the server's resources. By using the cors middleware in Express.js, you can easily configure your server to handle CORS
and allow requests from specified origins.