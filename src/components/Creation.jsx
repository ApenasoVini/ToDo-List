import React, { useState } from 'react';

export default function Creation() {
    return (
        <div className='Creation'>
            <input type="text" placeholder='Escreva sua tarefa...' />
            <button type='button'>  
                <span class="material-symbols-outlined">
                    add
                </span>
            </button>
        </div>
    );
};


//ICON TRASH
{/* <span class="material-symbols-outlined">
delete
</span> */}