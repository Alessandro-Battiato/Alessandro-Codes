import React from "react";

const ContactMe = React.forwardRef(({}, ref) => {
    return (
        <div className="flex h-[1000px]">
            <div className="flex-1">Contact Me</div>
            <div className="flex-1" ref={ref} />
        </div>
    );
});

ContactMe.displayName = "ContactMe";

export default ContactMe;
