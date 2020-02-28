import React from 'react';
import './Content.css';
import Notice from './Notice';

function Content() {
    return (
        <div class="Content">
            <main className="Main-content">
                <Notice />
            </main>
        </div>
    );
}

export default Content;
