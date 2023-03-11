import React from "react";


type StyleProps = {
    width: string;
    maxWidth: string;
    margin: string;
    position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
    left: string;
    top: string;
    transform: string;
    zIndex: string;
    backgroundColor: string;
    padding: string;
    borderRadius: string;
    display: string;
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';

  }

let dialogStyles:StyleProps = {
  width: "500px",
  maxWidth: "100%",
  margin: "0 auto",
  position: "fixed",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
  zIndex: "999",
  backgroundColor: "#eee",
  padding: "10px 20px 40px",
  borderRadius: "8px",
  display: "flex",
  flexDirection: 'column',
};

const DialogBox = (props: any) => {
  let dialog: any = (
    <div style={dialogStyles}>
      <div>{props.children}</div>
    </div>
  );

  if (!props.isOpen) {
    dialog = null;
  }
  return <div>{dialog}</div>;
};

export default DialogBox;