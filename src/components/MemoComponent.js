import React from 'react'

function MemoComponent({name}) {
    console.log('Rendering memo component');
    return (
        <div>
            {name}
        </div>
    )
}

//Higher order component
export default React.memo(MemoComponent)
