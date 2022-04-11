export default function Example() {
  const solution = [
    {
      id: 1,
      image: 'https://flat.io/icons/icon.svg',
      name: 'Music: Flat',
    },
    {
      id: 2,
      image:
        'https://github.githubassets.com/images/modules/logos_page/Octocat.png',
      name: 'Tech: Online IDE',
    },
    {
      id: 3,
      image:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDQ4IiBoZWlnaHQ9IjIwNDgiIHZpZXdCb3g9IjAgMCAyMDQ4IDIwNDgiPjxwYXRoIHN0eWxlPSJmaWxsOiNmZmYiIGQ9Ik0xMzc4LjAyNyAzNjAuOTE5YzI3LjI0OS0xMC4zOSA1Ny4zNDgtNi40NyA3OC4wMjYgNS42MiAyMC42NzggMTIuMDkzIDMxLjE5OSAzMy4xMDUgMzEuNTYyIDYzLjAzOC4zMjggMjYuOTQtOC4wNCA2Mi41NjQtMjUuMSAxMDYuODczLTEzNC43NzYgMzEwLjU0Mi0yMjkuNzMzIDUzNC45NzgtMjgwLjg2NyA2MDcuMzE1LTM3LjI4NyA1My4zMS03OS40OCA4OC45NDQtMTI2LjU4MiAxMDYuOTA0LTQ5LjA0NyAxOC43LTkxLjQyNiAxNC45OS0xMjcuMTM1LTExLjEzMS0zNS43MDktMjYuMTIyLTYwLjAzLTY5LjQwNC02MC42ODktMTIzLjcxMS0uNjY0LTU0LjczNCAxNi42OTItMTA2Ljg4OSA1Mi4wNjgtMTU2LjQ2M2wzODMuMjMtNTM0Ljg2NmMyMi42ODctMzEuODQ4IDQ3Ljg1LTUzLjA0MSA3NS40ODctNjMuNTh6bS01NjYuMDQxIDkzMC44OTRjMTkuNDYgMjUuODk0IDQzLjg2MiA0Ni4xNzMgNzMuMjA0IDYwLjgzNSAyOS4zNDIgMTQuNjYyIDYwLjgxIDIyLjM3NCA5NC40MDUgMjMuMTM2bDYuNTQ2IDQxLjI3N2MxMy40ODEgODIuNDYtMi4wNTUgMTU2LjAxNC00Ni42MSAyMjAuNjYyLTgwLjU5NiA5NC4yOS0xODIuMzk2IDE1Ny4xNi0zMDguOTM3IDEyOS4yODYtOTIuMDM2LTI2LjUwNS0xNzYuNDE4LTEwMi4wMTItMTkyLjQ1Ny0yMDMuODQ3IDM4LjAyOCAyOS4yNDUgMTIxLjM0OCAxNi43NTYgMTM2LjA3OC00Ni4wNzkgNi4wNTQtMjguMDE1IDE1LjYyLTU2Ljc5MSAyNS42OS03Ny45MjYgMTAuMDctMjEuMTM2IDIxLjQ5My0zOS4xNzcgMzQuMjY5LTU0LjEyNCAxMi43NzYtMTQuOTQ3IDI4LjYwMy0yOC4zMTYgNDcuNDgxLTQwLjEwNSAxOC44NzktMTEuNzg5IDM4LjI0Ni0yMS41ODMgNTguMTAyLTI5LjM4MyAxOS44NTYtNy44IDQzLjkzMi0xNS43MSA3Mi4yMjktMjMuNzMyeiIvPjxwYXRoIHN0eWxlPSJmaWxsOiNmZjU1ODU7ZmlsbC1vcGFjaXR5OjEiIGQ9Im00NzkuOTc3IDEzMzYuMTk2LTExNS44OTQgNDUuOTM5Yy0xMC40OTQgNC4xNi0yMC41MDYgNC4xNjktMzAuMDMuMDQ2LTkuNTIyLTQuMTIzLTE2LjM2LTExLjQzMy0yMC41MTQtMjEuOTNMMjMuMTk0IDYyNi41MTJjLTQuMTUzLTEwLjQ5Ny00LjE2OS0yMC41MDctLjA0Ni0zMC4wMyA0LjEyMy05LjUyMyAxMS40MzMtMTYuMzYgMjEuOTMtMjAuNTE0bDczMy43MzgtMjkwLjM0NWMxMC40OTctNC4xNTQgMjAuNTA2LTQuMTY5IDMwLjAzLS4wNDYgOS41MjIgNC4xMjMgMTYuMzU0IDExLjQzNiAyMC41MTQgMjEuOTNsNDUuOTQgMTE1Ljg5NGM0LjE2IDEwLjQ5NSA0LjE2OCAyMC41MDcuMDQ1IDMwLjAzcy0xMS4zMSAxNi42ODktMjEuOTMgMjAuNTE1TDI3MS43ODYgNzA0LjAyMmwyMzAuMDc2IDU4MS42MjljNC4xNTIgMTAuNDk4IDQuMTY5IDIwLjUwNy4wNDYgMzAuMDMtNC4xMjQgOS41MjMtMTEuNDM0IDE2LjM2MS0yMS45MyAyMC41MTV6bTEwODYuMDItNTY1Ljg4OSAxMTUuODk0LTQ1LjkzOWMxMC40OTQtNC4xNiAyMC41MDctNC4xNjkgMzAuMDMtLjA0NiA5LjUyMyA0LjEyMyAxNi4zNjEgMTEuNDMzIDIwLjUxNSAyMS45M2wyOTAuMzQ0IDczMy43MzhjNC4xNTQgMTAuNDk3IDQuMTcgMjAuNTA2LjA0NiAzMC4wMy00LjEyMyA5LjUyMi0xMS40MzMgMTYuMzYtMjEuOTMgMjAuNTE0TDEyNjcuMTYgMTgyMC44OGMtMTAuNDk3IDQuMTU0LTIwLjUwNyA0LjE2OS0zMC4wMy4wNDYtOS41MjMtNC4xMjMtMTYuMzU1LTExLjQzNi0yMC41MTUtMjEuOTNsLTQ1LjkzOS0xMTUuODk0Yy00LjE2LTEwLjQ5NS00LjE2OS0yMC41MDctLjA0Ni0zMC4wMyA0LjEyMy05LjUyMyAxMS4zMS0xNi42ODkgMjEuOTMtMjAuNTE1bDU4MS42MjktMjMwLjA3NS0yMzAuMDc1LTU4MS42M2MtNC4xNTMtMTAuNDk3LTQuMTctMjAuNTA2LS4wNDYtMzAuMDI5IDQuMTIzLTkuNTIzIDExLjQzMy0xNi4zNjEgMjEuOTMtMjAuNTE1eiIvPjwvc3ZnPg==',
      name: 'Art: Aggie',
    },
    {
      id: 4,
      image: 'https://tailwindui.com/img/logos/typescript-logo-400.svg',
      name: 'TypeScript',
    },
    {
      id: 5,
      image: 'https://tailwindui.com/img/logos/sketch-logo-400.svg',
      name: 'Sketch',
    },
    {
      id: 6,
      image: 'https://tailwindui.com/img/logos/react-logo-400.svg',
      name: 'React',
    },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Integrated Learning Tools
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
              We continue to integrate various tools to help mentors and mentees
              as they develop plans and skills.
            </p>
            <div className="mt-8 sm:flex">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Create Account
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
            {solution.map((item) => (
              <>
                <div
                  key={item.id}
                  className="col-span-1 flex flex-col justify-center items-center py-8 px-8 bg-gray-100"
                >
                  <img
                    className="max-h-12 rounded-sm"
                    src={item.image}
                    alt="Illustration"
                  />
                  <p>{item.name}</p>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
