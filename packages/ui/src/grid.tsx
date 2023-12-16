import React from "react";

const MyGrid = ({children, columns}: {children: React.ReactNode, columns: number}) => {
    return(
        <div className={`grid grid-flow-col grid-cols-1 lg:grid-cols-${columns} gap-x-4`}>
            {children}
        </div>
    )
    }

export { MyGrid };