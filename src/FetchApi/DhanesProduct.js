import React from "react";

export default class DhanesProduct extends React.Component {
  constructor() {
    super();
    this.state = {
      user: []
    };
  }
  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          user: result
        });
        console.log(result);
      });
  }
  render() {
    return (
      <div>
        <body
          style={{
            backgroundColor: "red",
            WebkitTextFillColor: "yellow",

            padding: "5%",
            boarder: "solid",
            textAlign: "center",
            fontSize: 30,
            fontStyle: "bold"
          }}
        >
          {this.state.user.map((u, i) => {
            return (
              <div>
                <p key={i}>{u.category}</p>

                <img
                  src={u.image}
                  alt="image"
                  style={{
                    width: "20%",
                    backgroundColor: "blue",
                    WebkitTextFillColor: "maroon",
                    padding: 5,
                    boarder: "solid",
                    textAlign: "center",
                    fontSize: 20,
                    fontStyle: "bold"
                  }}
                />
                <div
                  style={{
                    backgroundColor: "black",
                    fontSize: 15,
                    WebkitTextFillColor: "fuchsia"
                  }}
                >
                  ID:{u.id}{" "}
                </div>

                <div
                  style={{
                    backgroundColor: "black",
                    WebkitTextFillColor: "grey"
                  }}
                >
                  {u.title}
                </div>
                <div
                  style={{
                    backgroundColor: "black",
                    fontSize: 15,
                    WebkitTextFillColor: "white"
                  }}
                >
                  {u.description}
                </div>

                <div
                  style={{
                    backgroundColor: "black",
                    WebkitTextFillColor: "cyan"
                  }}
                >
                  ₹{u.price}
                </div>
                <span>
                  <div
                    style={{
                      WebkitTextFillColor: "#26a541",
                      backgroundColor: "black"
                    }}
                  >
                    {" "}
                    {u.rating.rate}
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg=="
                      class="1wB990_19cuvx"
                    />
                  </div>
                  <div
                    style={{
                      backgroundColor: "black",
                      WebkitTextFillColor: "thistle"
                    }}
                  >
                    {u.rating.count} rating
                  </div>
                </span>
              </div>
            );
          })}
        </body>
      </div>
    );
  }
}
