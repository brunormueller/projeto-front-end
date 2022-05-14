import React from 'react';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function FixedTags() {
    const fixedOptions = [top100Films[6]];
    const [value, setValue] = React.useState([...fixedOptions, top100Films[13]]);
    return (
        <Autocomplete
            multiple
            id="fixed-tags-demo"
            value={value}
            onChange={(event, newValue) => {
                setValue([
                    ...fixedOptions,
                    ...newValue.filter((option) => fixedOptions.indexOf(option) === -1),
                ]);
            }}
            options={top100Films}
            getOptionLabel={(option) => option.title}
            renderTags={(tagValue, getTagProps) =>
                tagValue.map((option, index) =>
                 (
                    <Chip
                        label={option.title}
                        {...getTagProps({ index })}
                        disabled={fixedOptions.indexOf(option) !== -1}
                    />
                ))
            }
            style={{ width: 500 }}
            renderInput={(params) => (
                <TextField {...params} label="Fixed tag" variant="outlined" placeholder="Favorites" />
            )}
        />
    );
}
const top100Films = [
    {title: 'Javascript'}
];