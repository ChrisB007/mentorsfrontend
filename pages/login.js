import { getSession, signIn, useSession, getProviders } from 'next-auth/react';

export default function Login({ providers }) {
  return (
    <>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Get access with these providers
          </h2>
        </div>
        {/*Cycles over the providers and renders a button for each one.*/}
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div className="mt-6">
              <div className="flex flex-col">
                {Object.values(providers).map((provider) => (
                  <div key={provider.name}>
                    <button
                      className="w-full h-10 bg-zinc-100 mb-3 px-4 rounded"
                      onClick={() =>
                        signIn(provider.id, {
                          callbackUrl: `/dashboard`,
                        })
                      }
                    >
                      Sign in with {provider.name}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  return { props: { providers: await getProviders() } };
}
