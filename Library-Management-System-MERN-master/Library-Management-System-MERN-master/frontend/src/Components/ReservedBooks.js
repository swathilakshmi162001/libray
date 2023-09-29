import React from 'react'
import './ReservedBooks.css'

function ReservedBooks() {
    return (
        <div className='reservedbooks-container'>
            <h className='reservedbooks-title'>Books On Hold</h>
            <table className='reservedbooks-table'>
                <tr>
                    <th>Name</th>
                    <th>Book</th>
                    <th>Date</th>
                </tr>
                <tr>
                    <td>swathi</td>
                    <td>Rich Dad Poor Dad</td>
                    <td>12/7/2021</td>
                </tr>
                <tr>
                    <td>Swetha</td>
                    <td>The Subtle Art</td>
                    <td>10/7/2023</td>
                </tr>
                <tr>
                    <td>Hari</td>
                    <td>Wings Of Fire</td>
                    <td>15/9/2019</td>
                </tr>
                <tr>
                    <td>Harini</td>
                    <td>The Secret</td>
                    <td>02/9/2022</td>
                </tr>
                <tr>
                    <td>Surya</td>
                    <td>Bad Guys</td>
                    <td>21/7/2023</td>
                </tr>
                <tr>
                    <td>Dinesh</td>
                    <td>Giovanni Rovelli</td>
                    <td>02/7/2018</td>
                </tr>
            </table>
        </div>
    )
}

export default ReservedBooks
