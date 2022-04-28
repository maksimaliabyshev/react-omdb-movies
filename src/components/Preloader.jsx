import React from 'react';

function Preloader() {
    return (
        <div className="progress-wrap">
            <div className="progress">
                <div className="indeterminate" />
            </div>
        </div>
    );
}

export { Preloader };
