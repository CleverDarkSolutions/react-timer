import React from 'react';

const Result = (props) => {
    return (
        <tr>
            <th scope="row">{props.count}</th>
            <td>{props.time}</td>
        </tr>

    )
}

export default Result;