const imgs = [
    "/restaurant_outlooking.jpg",
];

export default function PreLoad(){
    return (
        <>
            {imgs.map((value)=>{(
                    <img 
                        src={value}
                        alt=""
                        style={{display: "none"}}
                        aria-hidden="true"
                    />
                )})}
        </>
    );
}