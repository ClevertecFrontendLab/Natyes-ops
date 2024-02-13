type OptionalRecord<Slices extends keyof any, T> = {
    [Slice in Slices]?: T;
};
