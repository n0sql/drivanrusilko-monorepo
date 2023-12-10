import React from 'react';
import { DashBoardView } from 'ui';
const DoctorDashboard: React.FC = () => {
    return (
        <div className="flex  w-full flex-col h-full bg-gray-100  dark:bg-gray-900">
         
         

            {/* Main content */}
            
                <DashBoardView />
            

        </div>
    );
};

export default DoctorDashboard;
