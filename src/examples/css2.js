const styles = {
  "@keyframes slide": {
    from: {
      padding: "0px",
    },
    "50%": {
      padding: "0 15px",
    },
    to: {
      padding: "0",
    },
  },
  "ion-footer, ion-tab-bar": {
    bottom: "0",
    left: "0",
    right: "0",
    height: "87px",
    ".item, ion-tab-button": {
      width: "45px",
      height: "45px",
      "place-content": "center",
    },
  },
  figure: {
    "box-sizing": "content-box",
    "> img": {
      "object-fit": "cover",
    },
  },
  img: {
    "border-radius": "9px",
    "background-color": "#eee",
  },
  '.img': {
    "@extends": 'img'
  },
  "ion-icon": {
    "font-size": "24px",
    "font-weight": "bolder",
    "--ionicon-stroke-width": "24px",
  },
  ".tab-selected": {
    background: "#000",
    color: "#fff",
    "border-radius": "9999px",
    transition: "padding .4s ease-in",
    animation: "slide .6s",
  },
  ".product-item, ion-item-options": {
    "border-radius": "15px",
    height: "96px",
    transition: "all .2s ease-in",
    "&:hover": {
      height: "14rem",
      transition: "all .2s ease-out",
      position: "relative",
      ionItem: {
        "& .chip": {
          display: "none",
          transition: "display .3s ease-out",
        },
        "& .product-info": {
          transform: "translateX(85px)",
          transition: "all .4s ease-out",
          ".brand": {
            transform: "translateX(85px)",
            transition: "all .4s linear",
          },
          ".product-slider": {
            ".product-item": {
              "&:hover": {
                ionItem: {
                  "& .product-info": {
                    transform: "translateX(90px)",
                    transition: "all .4s ease-out",
                    ".brand": {
                      transform: "translateX(95px)",
                      transition: "all .4s linear",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};


module.exports = styles