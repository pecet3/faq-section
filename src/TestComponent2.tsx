interface PropsInterface {
    title: string;
    luckyNumber: number;
}


export const TestComponent2 = ({title, luckyNumber}: PropsInterface) => {

    return(
        <div>
        <h2>{title}</h2>
        <p>Your lucky number is: {luckyNumber}</p>
        </div>
    )
}