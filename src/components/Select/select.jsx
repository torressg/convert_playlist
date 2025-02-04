"use client"

import { HStack, createListCollection  } from "@chakra-ui/react"
import { Avatar } from "@/components/ui/avatar"
import {
    SelectContent,
    SelectItem,
    SelectLabel,
    SelectRoot,
    SelectTrigger,
    SelectValueText,
} from "@/components/ui/select"

const SelectValueItem = () => (
    <SelectValueText placeholder="Selecione...">
        {(items) => {
            if (!items || items.length === 0) return "Selecione...";
            const { name, avatar } = items[0];
            return (
                <HStack>
                    <Avatar shape="rounded" name={name} size="2xs" src={avatar} />
                    {name}
                </HStack>
            )
        }}
    </SelectValueText>
)

export const SelectSongStreaming = ({ streamings }) => {
    const streamingsOptions = createListCollection({
        items: streamings,
        itemToString: (item) => item.name,
        itemToValue: (item) => item.id,
    })
    return (
        <SelectRoot
            collection={streamingsOptions}
            size="sm"
            width="240px"
            defaultValue={[streamingsOptions.items[0].id]}
            positioning={{ sameWidth: true }}
        >
            <SelectLabel>Selecione onde a playlist está</SelectLabel>
            <SelectTrigger>
                <SelectValueItem />
            </SelectTrigger>
            <SelectContent portalled={false}>
                {streamingsOptions.items.map((item) => (
                    <SelectItem item={item} key={item.id} justifyContent="flex-start">
                        <Avatar
                            shape="rounded"
                            name={item.name}
                            src={item.avatar}
                            size="2xs"
                        />
                        {item.name}
                    </SelectItem>
                ))}
            </SelectContent>
        </SelectRoot>
    )
}
