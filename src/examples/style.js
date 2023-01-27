const header = require("./header");

const fontFam = "Arial";

const card = {
  ".card": {
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    textAlign: "center",
    fontFamily: fontFam,
    "&.active": {
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
    },
    "&:hover": {
      cursor: "pointer",
      transform: "translateY(-5px)",
    },
    "&:focus": {
      outline: "none",
      border: "2px solid #0074D9",
    },
    ".card-image": {
      width: "100%",
      borderRadius: "8px 8px 0 0",
    },
    ".card-title": {
      fontSize: "24px",
      fontWeight: "bold",
      marginTop: "20px",
    },
    ".card-text": {
      fontSize: "16px",
      lineHeight: "1.5",
      margin: "20px 0",
    },
    ".card-actions": {
      marginTop: "20px",
      textAlign: "center",
      button: {
        backgroundColor: "#0074D9",
        color: "white",
        border: "none",
        padding: "10px 20px",
        borderRadius: "4px",
        fontSize: "16px",
        "&:hover": {
          backgroundColor: "#7FDBFF",
        },
        "&:focus": {
          outline: "none",
        },
      },
    },
  },
  ".paper": {
    "@extends": ".card",
    backgroundColor: "blue",
    backgroundImage: {
      url: "https://well",
    },
    border: {
      width: '2px',
      color: '#000',
      style: 'solid'
    },
  }, 
};

module.exports = card;
