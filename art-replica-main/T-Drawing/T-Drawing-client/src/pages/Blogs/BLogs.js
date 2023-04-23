import React from "react";
import useTitle from "../../utilities/Hook/useTitle";

const BLogs = () => {
  useTitle("Blogs");
  return (
    <div className="mt-16 mb-10">
      <div className="text-center">
        <p className="text-2xl font-bold text-green-500">Blogs</p>
        <h2 className="text-5xl font-semibold">Learn With Blog </h2>
      </div>

      <div className="flex justify-center  bg-[#F3F3F3] rounded-lg my-10">
        <div className="my-10 w-11/12">
          <div className="grid grid-cols-1 gap-4">
            <div
              tabIndex={0}
              className="collapse collapse-arrow border border-base-300 bg-base-100"
            >
              <div className="collapse-title text-xl font-medium bg-green-400">
                Difference between SQL and NoSQL
              </div>
              <div className="collapse-content">
                <p>
                  The Main Differences: <br />
                  {`
                    SQL databases are primarily called as Relational Databases
                    (RDBMS); whereas NoSQL database are primarily called as
                    non-relational or distributed database.
                     SQL requires you to use predefined schemas to determine the structure of your data before you work with it. Also all of your data must follow the same structure. A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store. 
                     SQL databases are table-based on the other hand NoSQL databases are either key-value pairs, document-based, graph databases or wide-column stores. This makes relational SQL databases a better option for applications that require multi-row transactions such as an accounting system or for legacy systems that were built for a relational structure. 
                    `}
                </p>
              </div>
            </div>
            <div
              tabIndex={1}
              className="collapse collapse-arrow border border-base-300 bg-base-100"
            >
              <div className="collapse-title text-xl font-medium bg-green-400 h-20">
                How does NodeJS handle multiple requests at the same time?
              </div>
              <div className="collapse-content">
                <p>
                  {`
                    NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. 

If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
                    `}
                </p>
              </div>
            </div>
            <div
              tabIndex={2}
              className="collapse collapse-arrow border border-base-300 bg-base-100"
            >
              <div className="collapse-title text-xl font-medium bg-green-400">
                What is JWT, and how does it work?
              </div>
              <div className="collapse-content">
                <p>
                  {`JSON Web Token (JWT) is an open standard (RFC 7519) for
                    securely transmitting information between parties as JSON
                    object. It is compact, readable and digitally signed using a
                    private key/ or a public key pair by the Identity
                    Provider(IdP). So the integrity and authenticity of the
                    token can be verified by other parties involved. The purpose
                    of using JWT is not to hide data but to ensure the
                    authenticity of the data. JWT is signed and encoded, not
                    encrypted. JWT is a token based stateless authentication
                    mechanism. Since it is a client-side based stateless
                    session, server doesn't have to completely rely on a
                    datastore(database) to save session information.`}
                </p>
              </div>
            </div>
            <div
              tabIndex={3}
              className="collapse collapse-arrow border border-base-300 bg-base-100"
            >
              <div className="collapse-title text-xl font-medium bg-green-400">
                What is the difference between javascript and NodeJS?
              </div>
              <div className="collapse-content">
                <p>
                  {`
                    1. NodeJS : 
NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. 

2. JavaScript : 
Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. 
                    `}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BLogs;
