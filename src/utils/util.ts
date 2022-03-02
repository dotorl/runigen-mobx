// check is null
export const isNull = (value: any): boolean => {
	return value === null;
};

// check is undefined
export const isUndefined = (value: any): boolean => {
	return value === undefined;
};

// check is empty
export const isEmpty = (value: any): boolean => {
	return value === '';
};

// check is contained in array
export const isContainedInArray = (value: any, array: any[]): boolean => {
	return array.indexOf(value) !== -1;
};

// check is included in array
export const isIncludedInArray = (value: any, array: any[]): boolean => {
	return array.includes(value);
};
