export default function Content({ data }) {
    return (
        <div
            style={{ fontSize: 20 }}
            dangerouslySetInnerHTML={{ __html: data }}
        ></div>
    );
}
