const styles = {
  ".container": {
    width: "100%",
    background: {
      color: 'white',
      position: "center",
      repeat: "no-repeat",
      size: "cover",
      image: {
        url: "./bg.jpg"
      },
    },
    border: {
      width: "2px",
      style: "solid",
      color: "black",
    },
    font: {
      family: "Arial, sans-serif",
      size: "16px",
      weight: "bold",
      style: "italic",
      variant: "small-caps",
      lineHeight: "1.5",
    },
    margin: {
      top: "0",
      right: "auto",
      bottom: "0",
      left: "auto",
    },
    padding: {
      top: "20px",
      right: "30px",
      bottom: "20px",
      left: "30px",
    },
    outline: {
      width: "1px",
      style: "dashed",
      color: "red",
    },
    listStyle: {
      type: "disc",
      position: "inside",
      image: {
        url: "https://example.com/bullet.png",
      },
    },
    animation: {
      name: "fadeIn",
      duration: "1s",
      timingFunction: "ease-in-out",
      delay: "0s",
      iterationCount: "infinite",
      direction: "alternate",
      fillMode: "none",
      playState: "running",
    },
    transition: {
      property: "all",
      duration: "1s",
      timingFunction: "ease-in-out",
      delay: "0s",
    },
    column: {
      count: "3",
      width: "33.33%",
      gap: "normal",
    },
    gridTemplate: {
      rows: "auto 1fr",
      columns: "1fr auto",
    },
    gridTemplateRows: {
      rows: "auto 1fr",
    },
    gridTemplateColumns: {
      columns: "1fr auto",
    },
  },
  ".card": {
    "@extends": ".container",
    width: "50%",
    background: {
      color: "gray",
    },
    padding: {
      top: "10px",
      right: "20px",
      bottom: "10px",
      left: "20px",
    },
    gridTemplate: {
      rows: "1fr auto",
    },
  },
};

export default styles;