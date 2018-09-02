// All the ReactiveSearch components are wrapped inside a container component — ReactiveBase which glues the Elasticsearch index and the ReactiveSearch components together.

// installoikaa npm install @appbaseio/reactivesearch

import React, { Component } from 'react';
import { ReactiveBase, CategorySearch, ResultCard } from '@appbaseio/reactivesearch';



class RecyclingSearch extends React.Component {
    render() {
        return (
            <ReactiveBase
                app="autot"
                credentials="lllpFsEXr:d9ff8cf6-4f9a-4a88-93b3-235940c6cc93">
                <CategorySearch
                    componentId="searchbox"
                    dataField="name"
                    categoryField="brand.raw" // use "brand.keyword" for newly cloned datasets
                    placeholder="Search for cars"
                />
                <ResultCard
                    componentId="result"
                    title="Results"
                    dataField="name"
                    from={0}
                    size={5}
                    react={{
                        and: ["searchbox"]
                    }}
                    onData={(res) => {
                        return {
                            title: res.name,
                            description: res.brand
                        }
                    }}
                />
            </ReactiveBase>
        );
    }
}
export default RecyclingSearch;