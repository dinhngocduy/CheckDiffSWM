interface ReportSalesHeaderItemProps {
    name: string;
}

export const ReportSalesHeaderItem = (props: ReportSalesHeaderItemProps) => {
    return (
        <div className="report-sales-header-item">
            <p>{props.name}</p>        
        </div>
    )
}
