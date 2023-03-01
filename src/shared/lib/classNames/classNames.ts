type Mods = Record<string, string | boolean>

export const classNames = (cls: string, mods: Mods = {}, additions: string[] = []): string => {
    return [
        cls,
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className),
        ...additions.filter(Boolean)
    ].join(' ')
}
