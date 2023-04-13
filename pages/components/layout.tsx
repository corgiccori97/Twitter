import React from 'react';

interface LayoutProps {
    title?: string;
    goBack?: boolean;
    children:React.ReactNode;
}

export default function Layout({
    title,
    goBack,
    children,
}:LayoutProps) {
    return (
        <div className='w-3/4 mx-auto p-4 mt-9'>
        <header className='flex flex-col space-y-4 justify-center items-center'>
            <svg viewBox="328 355 335 276" className='w-10 h-10 fill-[#3BA9EE]'>
            <path d="
                M 630, 425
                A 195, 195 0 0 1 331, 600
                A 142, 142 0 0 0 428, 570
                A  70,  70 0 0 1 370, 523
                A  70,  70 0 0 0 401, 521
                A  70,  70 0 0 1 344, 455
                A  70,  70 0 0 0 372, 460
                A  70,  70 0 0 1 354, 370
                A 195, 195 0 0 0 495, 442
                A  67,  67 0 0 1 611, 380
                A 117, 117 0 0 0 654, 363
                A  65,  65 0 0 1 623, 401
                A 117, 117 0 0 0 662, 390
                A  65,  65 0 0 1 630, 425
                Z" />
                {/* style="fill:#3BA9EE;"/> */}
            </svg>
            <h1 className='font-bold text-2xl text-center'>{title}</h1>
        </header>
        <div>{children}</div>
        </div>
    );
}