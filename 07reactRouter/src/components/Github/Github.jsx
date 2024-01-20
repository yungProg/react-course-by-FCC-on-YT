import { useEffect } from "react"
import { useState } from "react"
import { useLoaderData } from "react-router-dom"


function Github() {
    /*const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://api.github.com/users/yungProg")
        .then((response) => response.json())
        .then((result) => setData(result))
    }, [])*/
    const data = useLoaderData()
  return (
    <div>
      <div><img src={data.avatar_url} /> Github Followers: {data.followers}</div>
    </div>
  )
}

export default Github

export async function githubLoader() {
  const request = await fetch("https://api.github.com/users/yungProg");
  return request.json()
}