import { Routes, Route, Navigate } from "react-router-dom";
import Potions from "./components/potions/Potions";
import UniqueItems from "./components/uniqueItems/UniqueItems";
import Talismans from "./components/talismans/Talismans";
import Scrolls from "./components/scrolls/Scrolls";
import EnchantedItems from "./components/enchantedItems/EnchantedItems";
import Page from "./components/page/Page";

export default function AllRoutes({ pathname, hash }) {
    return (
        <Routes>
            <Route index element={
                <Page>
                    <UniqueItems />
                </Page>
            } />
            <Route path="uniqueItems" element={
                <Page>
                    <UniqueItems />
                </Page>
            } />
            <Route path="potions" element={
                <Page>
                    <Potions />
                </Page>
            } />
            <Route path="talismans" element={
                <Page>
                    <Talismans />
                </Page>
            } />
            <Route path="scrolls" element={
                <Page>
                    <Scrolls />
                </Page>
            } />
            <Route path="enchanted" element={
                <Page>
                    <EnchantedItems />
                </Page>
            } />
            <Route path="enchanted/:id" element={
                <Page>
                    <EnchantedItems />
                </Page>
            } />
            <Route path="*" element={<Navigate to='/' replace />} />
        </Routes>
    )
}