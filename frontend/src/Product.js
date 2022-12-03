export default function Product(props) {

    return (
      <div style={{width: "100px", height: "100px", background: "black", color: "white", margin: "5px", display: "flex", alignItems: "center", justifyContent: "center"}}>
        {props.name}
      </div>
    )
    
  }
  