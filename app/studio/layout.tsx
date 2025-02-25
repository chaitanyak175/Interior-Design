import React from "react";

const StudioLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return <main className="relative z-20">{children}</main>;
};

export default StudioLayout;
