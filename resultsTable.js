import React,{Component} from 'react';
import Result from './result';

const ResultsTable = (props) => {
    const results = props.results;
    const cnt = props.count;
    const componentsToRender = results.map((result,count) => (
        <Result count={count} time={result}></Result>
    ));
    return(
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Time</th>
                    </tr>
                </thead>
                <tbody>
                    {componentsToRender}
                </tbody>
            </table>
        </div>
    )
}

export default ResultsTable;