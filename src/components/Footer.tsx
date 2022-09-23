import {lazy, Suspense} from 'react';

const DownloadLink = lazy(() => import ("./DownloadLink"));

export default function Footer() {
    return (
        <footer>
            <div className="container flex-col">
                <Suspense fallback={<div>Loading...</div>}>
                    <DownloadLink/>
                </Suspense>
                <p>
                    © 2022 Wout Vinckevleugel. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}