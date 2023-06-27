import './TotalView'

export const Totalview = ({total}) => {
    return(
        <>
            <div className="text-end">
                <span className="badge bg-success">{ total }</span>
            </div>
        </>
    )
}