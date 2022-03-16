import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Card } from "react-bootstrap";

import { Context } from "../index";

const BrandBar = observer(() => {
    const {device} = useContext(Context);

    return (
        <div style={{'display': 'flex'}}>
            {device.brands.map(brand => {
                return <Card
                            style={{'cursor': 'pointer'}}
                            className='p-3'
                            key={brand.id}
                            onClick={() => device.setSelectedBrand(brand)}
                            border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                        >
                            {brand.name}
                        </Card>
            })}
        </div>
    );
});

export default BrandBar;