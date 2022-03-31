import { getSession, signIn, useSession, getProviders } from 'next-auth/react';

export default function Login({ providers }) {
  return (
    <>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Register | Sign in
          </h2>
          <div>
            {Object.values(providers).map((provider) => (
              <div key={provider.name}>
                <button
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
    </>
  );
}

export async function getServerSideProps(context) {
  return { props: { providers: await getProviders() } };
}
