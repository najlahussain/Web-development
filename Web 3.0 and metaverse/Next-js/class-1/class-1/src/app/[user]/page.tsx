
    //the destructuring of params should have the same name as name of the dynamic folder. If it is not 'user' then it won't be displayed.
    export default function GiveName({ params, searchParams }: {
        params: { user: string },
        searchParams: { id: string },
      }) {
        
          return (
            <div>
                  My name is {params.user}.
            </div>
          )
        }