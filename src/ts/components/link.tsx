import * as React from 'react'

const link = (props: {active:boolean, children: any, onClick: () => void}) => {
    if(props.active){
        return <span>{props.children}</span>
    }

    return (
        <a href="#"
            onClick={e => {
                e.preventDefault();
                props.onClick();
            }}
            >
            {props.children}
        </a>
    )
}

export default link;