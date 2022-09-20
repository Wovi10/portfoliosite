import {lazy} from 'react';

const CopyrightComponent = lazy(() => import("../data/Copyright"));

export default function Footer() {
    return (
        <footer>
            <div>
                <CopyrightComponent/>
            </div>
        </footer>
    );
}