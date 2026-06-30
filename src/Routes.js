import { Routes, Route, Navigate } from "react-router-dom";
import Potions from "./pages/potions/Potions";
import UniqueItems from "./pages/uniqueItems/UniqueItems";
import Talismans from "./pages/talismans/Talismans";
import Scrolls from "./pages/scrolls/Scrolls";
import EnchantedItems from "./pages/enchantedItems/EnchantedItems";
import Page from "./components/page/Page";
import Ingredients from "./pages/ingredients/Ingredients";

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
            <Route path="ingredients" element={
                <Page>
                    <Ingredients />
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