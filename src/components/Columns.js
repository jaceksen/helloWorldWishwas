import React from 'react'

function Columns() {
    const items = [{id:1, title:'Tytuł1'},{id:2, title:'Tytuł2'}];
    return (
        <React.Fragment>
            {/* {
                items.map(item => (
                    <React.Fragment key={item.id}>
                        <p>{item.title}</p>
                    </React.Fragment>
                ))
            } */}
            <td>Name</td>
            <td>Jacek</td>
        </React.Fragment>
    )
}

export default Columns
