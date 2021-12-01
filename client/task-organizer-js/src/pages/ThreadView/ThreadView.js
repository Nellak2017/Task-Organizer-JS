import { SideNav, ThreadViewLarge } from "../../components";
import { useState } from "react";
import { useSelector } from 'react-redux';
import { ThreadViewLargeTableSummary, plainConfigsToUsableConfigs } from "../../state/transformers/transformers.js";


const ThreadView = () => {
    // Helper to generalize the Injection Logic
    const inject = (StoreData) => {
        const TABLE_CONTENT = "TableContent";

        for (let componentNum in StoreData) {
            switch (StoreData[componentNum].name) { // Switch based on the name of the component
                case TABLE_CONTENT:
                    StoreData[componentNum].data = ThreadViewLargeTableSummary(state.MasterData);
                    continue;
                default:
                    continue;
            }
        }
        return StoreData;
    }

    // Use the State of the Store
    const state = useSelector((state) => state);

    // Inject the initial data into our transformed Store data
    const StoreCopy = inject(plainConfigsToUsableConfigs(state.MasterConfigs.Threads));

    // Mirror the State of the Store with InfoSummaryData updates
    const [DataCopy, setInfoSummaryDataCopy] = useState(StoreCopy);

    // Every time the store updates, inject the InfoSummaryDataCopy with the OrganizerMain perspective of the Store

    return (
        <>
            <SideNav />
            {DataCopy.map((value, key) => {
                return (
                    <ThreadViewLarge key={JSON.stringify(state.MasterData) + key} data={value.data} tableHeaders={[DataCopy[key].tableHeaders]} />
                );
            })
            }
        </>
    );
}

export default ThreadView;