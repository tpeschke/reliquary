import "./ReactivityHex.css";

export default function ReactivityHex({ reactivity }) {
    const [top, topRight, bottomRight, bottom, bottomLeft, topLeft] = reactivity;

    return (
        <div className="reactivity-hex">
            <span>&#x2B22;</span>
            {top && (
                <div
                    className={"node top " + (top === "Stress" ? "stress" : "damage")}
                ></div>
            )}
            {topRight && (
                <div
                    className={
                        "node topRight " + (topRight === "Stress" ? "stress" : "damage")
                    }
                ></div>
            )}
            {bottomRight && (
                <div
                    className={
                        "node bottomRight " +
                        (bottomRight === "Stress" ? "stress" : "damage")
                    }
                ></div>
            )}
            {bottom && (
                <div
                    className={
                        "node bottom " + (bottom === "Stress" ? "stress" : "damage")
                    }
                ></div>
            )}
            {bottomLeft && (
                <div
                    className={
                        "node bottomLeft " + (bottomLeft === "Stress" ? "stress" : "damage")
                    }
                ></div>
            )}
            {topLeft && (
                <div
                    className={
                        "node topRight " + (topLeft === "Stress" ? "stress" : "damage")
                    }
                ></div>
            )}
        </div>
    );
}
