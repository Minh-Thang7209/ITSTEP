import { useState, type ReactNode } from 'react';
import './ui/GroupTooltip.css';


type TooltipProps = {
    infoText: string;
    children: ReactNode;
};

const Tooltip = ({ infoText, children }: TooltipProps) => {
    const [showTooltip, setShowTooltip] = useState(false);
    return <div className="tooltip-container"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
    >
        {children}
        <div className={'tooltip ' + (showTooltip ? 'open' : '')}>
            {infoText}
            <div className="arrow" />
        </div>
    </div>;
};

export default Tooltip;