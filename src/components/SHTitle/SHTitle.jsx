import React, {Fragment, useEffect} from "react";

export default function SHTitle(props) {

  const {title} = props;

  useEffect(() => {
    document.title = 'SH13 - '+title;
  }, []);

  return (
    <Fragment></Fragment>
  );
}
