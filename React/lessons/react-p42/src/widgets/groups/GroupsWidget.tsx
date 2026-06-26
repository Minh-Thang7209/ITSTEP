import { useEffect, useRef, useState } from 'react';
import './ui/GroupsWidgets.css';
import type IGroup from '../../entities/group/model/IGroup';
import GroupApi from '../../entities/group/api/GroupApi';
import Tooltip from './GroupTooltip';

export default function GroupsWidget() {
    const [groups, setGroups] = useState<Array<IGroup>>([]);
    const cropRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        GroupApi.allGroups().then(setGroups);
    }, []);

    const leftButtonClick = () => {
        let sr = cropRef.current!.scrollWidth -
            cropRef.current!.scrollLeft -
            cropRef.current!.clientWidth;
        console.log(
            cropRef.current!.clientWidth,
            cropRef.current!.scrollLeft,
            cropRef.current!.scrollWidth,
            sr
        );
        cropRef.current!.scrollLeft = -100;
    };
    return <div className='group-widget'>
        <button className='btn btn-outline-secondary' onClick={leftButtonClick}>
            <i className='bi bi-caret-left'></i>
        </button>
        <div className='groups-crop' ref={cropRef}>
            <div className='groups-container'>
                {groups.map(g => <div className="col" key={g.id}>

                    <Tooltip
                        infoText={`Перехід до групи: ${g.name}\n${g.description}`}
                    >
                        <div className='container'>
                            <img
                                src={g.imageUrl}
                                alt={g.name}
                                className='card-img'
                            />
                            {g.name}
                        </div>
                    </Tooltip>

                </div>)}
            </div>
        </div>
        <button className='btn btn-outline-secondary'>
            <i className='bi bi-caret-right'></i>
        </button>
    </div>;
}