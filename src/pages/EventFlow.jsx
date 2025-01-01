import React from "react";
import Header from "../components/contributions/Event-Flow/Header";
import GlimpseComponent from "../components/contributions/Event-Flow/GlimpseComponent";
import EventFlowComponent from "../components/contributions/Event-Flow/EventFlowComponent";
import WaveComponent from "../components/contributions/Event-Flow/WaveComponent";

export default function EventFlow() {
    return (
        <>
            <Header />
            <EventFlowComponent />   
            <GlimpseComponent />
        </>
    );
}