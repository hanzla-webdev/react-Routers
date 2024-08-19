import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/hiteshchoudhary')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data);
            })
    }, [])

    return (
        <div>
            <h1>Github Followers: {data.followers}</h1>
            <img src={data.avatar_url} alt="" />
        </div>
    )
}

export default Github