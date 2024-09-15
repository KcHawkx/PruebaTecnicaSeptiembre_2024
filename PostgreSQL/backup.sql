--
-- PostgreSQL database dump
--

-- Dumped from database version 17rc1
-- Dumped by pg_dump version 17rc1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: bordillos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.bordillos (
    id integer NOT NULL,
    segmento_id integer,
    descripcion character varying(255),
    longitud integer
);


ALTER TABLE public.bordillos OWNER TO postgres;

--
-- Name: bordillos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.bordillos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.bordillos_id_seq OWNER TO postgres;

--
-- Name: bordillos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.bordillos_id_seq OWNED BY public.bordillos.id;


--
-- Name: calzadas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.calzadas (
    id integer NOT NULL,
    segmento_id integer,
    descripcion character varying(255),
    longitud integer
);


ALTER TABLE public.calzadas OWNER TO postgres;

--
-- Name: calzadas_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.calzadas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.calzadas_id_seq OWNER TO postgres;

--
-- Name: calzadas_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.calzadas_id_seq OWNED BY public.calzadas.id;


--
-- Name: segmentos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.segmentos (
    id integer NOT NULL,
    numero integer,
    longitud integer,
    nomenclatura character varying(255)
);


ALTER TABLE public.segmentos OWNER TO postgres;

--
-- Name: segmentos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.segmentos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.segmentos_id_seq OWNER TO postgres;

--
-- Name: segmentos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.segmentos_id_seq OWNED BY public.segmentos.id;


--
-- Name: bordillos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bordillos ALTER COLUMN id SET DEFAULT nextval('public.bordillos_id_seq'::regclass);


--
-- Name: calzadas id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.calzadas ALTER COLUMN id SET DEFAULT nextval('public.calzadas_id_seq'::regclass);


--
-- Name: segmentos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.segmentos ALTER COLUMN id SET DEFAULT nextval('public.segmentos_id_seq'::regclass);


--
-- Data for Name: bordillos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.bordillos (id, segmento_id, descripcion, longitud) FROM stdin;
1	1	Descripcion 1	6
2	2	Descripcion 2	7
3	3	Descripcion 3	11
4	4	Descripcion 4	10
5	5	Descripcion 5	8
6	6	Descripcion 6	5
7	7	Descripcion 7	11
8	8	Descripcion 8	9
9	9	Descripcion 9	8
10	10	Descripcion 10	14
11	11	Descripcion 11	9
12	12	Descripcion 12	10
13	13	Descripcion 13	13
14	14	Descripcion 14	10
15	15	Descripcion 15	11
16	16	Descripcion 16	9
17	17	Descripcion 17	14
18	18	Descripcion 18	8
19	19	Descripcion 19	7
20	20	Descripcion 20	9
21	21	Descripcion 21	14
22	22	Descripcion 22	14
23	23	Descripcion 23	14
24	24	Descripcion 24	12
25	25	Descripcion 25	13
26	26	Descripcion 26	6
27	27	Descripcion 27	6
28	28	Descripcion 28	8
29	29	Descripcion 29	8
30	30	Descripcion 30	6
31	31	Descripcion 31	12
32	32	Descripcion 32	12
33	33	Descripcion 33	6
34	34	Descripcion 34	12
35	35	Descripcion 35	11
36	36	Descripcion 36	15
37	37	Descripcion 37	13
38	38	Descripcion 38	14
39	39	Descripcion 39	9
40	40	Descripcion 40	13
41	41	Descripcion 41	9
42	42	Descripcion 42	11
43	43	Descripcion 43	11
44	44	Descripcion 44	12
45	45	Descripcion 45	10
46	46	Descripcion 46	8
47	47	Descripcion 47	7
48	48	Descripcion 48	10
49	49	Descripcion 49	8
50	50	Descripcion 50	10
51	51	Descripcion 51	12
52	52	Descripcion 52	14
53	53	Descripcion 53	7
54	54	Descripcion 54	10
55	55	Descripcion 55	7
56	56	Descripcion 56	6
57	57	Descripcion 57	6
58	58	Descripcion 58	11
59	59	Descripcion 59	11
60	60	Descripcion 60	12
61	61	Descripcion 61	11
62	62	Descripcion 62	14
63	63	Descripcion 63	15
64	64	Descripcion 64	6
65	65	Descripcion 65	13
66	66	Descripcion 66	8
67	67	Descripcion 67	12
68	68	Descripcion 68	5
69	69	Descripcion 69	8
70	70	Descripcion 70	13
71	71	Descripcion 71	10
72	72	Descripcion 72	11
73	73	Descripcion 73	6
74	74	Descripcion 74	12
75	75	Descripcion 75	15
76	76	Descripcion 76	12
77	77	Descripcion 77	5
78	78	Descripcion 78	8
79	79	Descripcion 79	8
80	80	Descripcion 80	13
81	81	Descripcion 81	10
82	82	Descripcion 82	9
83	83	Descripcion 83	11
84	84	Descripcion 84	14
85	85	Descripcion 85	6
86	86	Descripcion 86	9
87	87	Descripcion 87	6
88	88	Descripcion 88	12
89	89	Descripcion 89	7
90	90	Descripcion 90	14
91	91	Descripcion 91	12
92	92	Descripcion 92	12
93	93	Descripcion 93	7
94	94	Descripcion 94	14
95	95	Descripcion 95	9
96	96	Descripcion 96	5
97	97	Descripcion 97	13
98	98	Descripcion 98	8
99	99	Descripcion 99	10
100	100	Descripcion 100	7
101	1	Descripcion 101	8
102	2	Descripcion 102	15
103	3	Descripcion 103	9
104	4	Descripcion 104	7
105	5	Descripcion 105	11
106	6	Descripcion 106	6
107	7	Descripcion 107	5
108	8	Descripcion 108	14
109	9	Descripcion 109	13
110	10	Descripcion 110	10
111	11	Descripcion 111	7
112	12	Descripcion 112	12
113	13	Descripcion 113	7
114	14	Descripcion 114	12
115	15	Descripcion 115	6
116	16	Descripcion 116	6
117	17	Descripcion 117	6
118	18	Descripcion 118	15
119	19	Descripcion 119	9
120	20	Descripcion 120	10
121	21	Descripcion 121	11
122	22	Descripcion 122	12
123	23	Descripcion 123	8
124	24	Descripcion 124	10
125	25	Descripcion 125	12
126	26	Descripcion 126	6
127	27	Descripcion 127	12
128	28	Descripcion 128	14
129	29	Descripcion 129	11
130	30	Descripcion 130	12
131	31	Descripcion 131	14
132	32	Descripcion 132	11
133	33	Descripcion 133	8
134	34	Descripcion 134	12
135	35	Descripcion 135	13
136	36	Descripcion 136	12
137	37	Descripcion 137	11
138	38	Descripcion 138	14
139	39	Descripcion 139	7
140	40	Descripcion 140	9
141	41	Descripcion 141	13
142	42	Descripcion 142	10
143	43	Descripcion 143	15
144	44	Descripcion 144	14
145	45	Descripcion 145	6
146	46	Descripcion 146	12
147	47	Descripcion 147	11
148	48	Descripcion 148	9
149	49	Descripcion 149	12
150	50	Descripcion 150	11
151	51	Descripcion 151	8
152	52	Descripcion 152	6
153	53	Descripcion 153	12
154	54	Descripcion 154	10
155	55	Descripcion 155	7
156	56	Descripcion 156	9
157	57	Descripcion 157	11
158	58	Descripcion 158	13
159	59	Descripcion 159	13
160	60	Descripcion 160	10
161	61	Descripcion 161	13
162	62	Descripcion 162	6
163	63	Descripcion 163	10
164	64	Descripcion 164	10
165	65	Descripcion 165	11
166	66	Descripcion 166	13
167	67	Descripcion 167	12
168	68	Descripcion 168	9
169	69	Descripcion 169	13
170	70	Descripcion 170	5
171	71	Descripcion 171	7
172	72	Descripcion 172	14
173	73	Descripcion 173	8
174	74	Descripcion 174	7
175	75	Descripcion 175	14
176	76	Descripcion 176	8
177	77	Descripcion 177	12
178	78	Descripcion 178	8
179	79	Descripcion 179	10
180	80	Descripcion 180	11
181	81	Descripcion 181	7
182	82	Descripcion 182	11
183	83	Descripcion 183	13
184	84	Descripcion 184	8
185	85	Descripcion 185	10
186	86	Descripcion 186	12
187	87	Descripcion 187	5
188	88	Descripcion 188	6
189	89	Descripcion 189	13
190	90	Descripcion 190	14
191	91	Descripcion 191	13
192	92	Descripcion 192	12
193	93	Descripcion 193	12
194	94	Descripcion 194	11
195	95	Descripcion 195	5
196	96	Descripcion 196	9
197	97	Descripcion 197	13
198	98	Descripcion 198	8
199	99	Descripcion 199	6
200	100	Descripcion 200	7
201	1	Descripcion 201	13
202	2	Descripcion 202	11
203	3	Descripcion 203	12
204	4	Descripcion 204	12
205	5	Descripcion 205	8
206	6	Descripcion 206	9
207	7	Descripcion 207	11
208	8	Descripcion 208	8
209	9	Descripcion 209	10
210	10	Descripcion 210	8
211	11	Descripcion 211	14
212	12	Descripcion 212	12
213	13	Descripcion 213	11
214	14	Descripcion 214	15
215	15	Descripcion 215	5
216	16	Descripcion 216	11
217	17	Descripcion 217	9
218	18	Descripcion 218	13
219	19	Descripcion 219	13
220	20	Descripcion 220	13
221	21	Descripcion 221	13
222	22	Descripcion 222	10
223	23	Descripcion 223	8
224	24	Descripcion 224	15
225	25	Descripcion 225	5
226	26	Descripcion 226	6
227	27	Descripcion 227	6
228	28	Descripcion 228	9
229	29	Descripcion 229	12
230	30	Descripcion 230	12
231	31	Descripcion 231	5
232	32	Descripcion 232	13
233	33	Descripcion 233	13
234	34	Descripcion 234	12
235	35	Descripcion 235	6
236	36	Descripcion 236	14
237	37	Descripcion 237	8
238	38	Descripcion 238	12
239	39	Descripcion 239	13
240	40	Descripcion 240	8
241	41	Descripcion 241	10
242	42	Descripcion 242	8
243	43	Descripcion 243	12
244	44	Descripcion 244	14
245	45	Descripcion 245	11
246	46	Descripcion 246	11
247	47	Descripcion 247	7
248	48	Descripcion 248	6
249	49	Descripcion 249	14
250	50	Descripcion 250	14
251	51	Descripcion 251	9
252	52	Descripcion 252	7
253	53	Descripcion 253	9
254	54	Descripcion 254	11
255	55	Descripcion 255	7
256	56	Descripcion 256	7
257	57	Descripcion 257	11
258	58	Descripcion 258	13
259	59	Descripcion 259	10
260	60	Descripcion 260	11
261	61	Descripcion 261	11
262	62	Descripcion 262	8
263	63	Descripcion 263	7
264	64	Descripcion 264	9
265	65	Descripcion 265	11
266	66	Descripcion 266	8
267	67	Descripcion 267	14
268	68	Descripcion 268	9
269	69	Descripcion 269	6
270	70	Descripcion 270	13
271	71	Descripcion 271	10
272	72	Descripcion 272	7
273	73	Descripcion 273	11
274	74	Descripcion 274	9
275	75	Descripcion 275	12
276	76	Descripcion 276	10
277	77	Descripcion 277	8
278	78	Descripcion 278	11
279	79	Descripcion 279	9
280	80	Descripcion 280	12
281	81	Descripcion 281	11
282	82	Descripcion 282	6
283	83	Descripcion 283	10
284	84	Descripcion 284	10
285	85	Descripcion 285	11
286	86	Descripcion 286	8
287	87	Descripcion 287	8
288	88	Descripcion 288	13
289	89	Descripcion 289	6
290	90	Descripcion 290	10
291	91	Descripcion 291	13
292	92	Descripcion 292	13
293	93	Descripcion 293	9
294	94	Descripcion 294	13
295	95	Descripcion 295	6
296	96	Descripcion 296	8
297	97	Descripcion 297	12
298	98	Descripcion 298	10
299	99	Descripcion 299	9
300	100	Descripcion 300	12
301	1	Descripcion 301	9
302	2	Descripcion 302	5
303	3	Descripcion 303	10
304	4	Descripcion 304	8
305	5	Descripcion 305	9
306	6	Descripcion 306	11
307	7	Descripcion 307	11
308	8	Descripcion 308	6
309	9	Descripcion 309	10
310	10	Descripcion 310	14
311	11	Descripcion 311	5
312	12	Descripcion 312	9
313	13	Descripcion 313	11
314	14	Descripcion 314	15
315	15	Descripcion 315	8
316	16	Descripcion 316	12
317	17	Descripcion 317	8
318	18	Descripcion 318	15
319	19	Descripcion 319	13
320	20	Descripcion 320	12
321	21	Descripcion 321	8
322	22	Descripcion 322	10
323	23	Descripcion 323	9
324	24	Descripcion 324	8
325	25	Descripcion 325	7
326	26	Descripcion 326	9
327	27	Descripcion 327	8
328	28	Descripcion 328	7
329	29	Descripcion 329	13
330	30	Descripcion 330	9
331	31	Descripcion 331	14
332	32	Descripcion 332	13
333	33	Descripcion 333	7
334	34	Descripcion 334	13
335	35	Descripcion 335	7
336	36	Descripcion 336	7
337	37	Descripcion 337	13
338	38	Descripcion 338	7
339	39	Descripcion 339	14
340	40	Descripcion 340	13
341	41	Descripcion 341	8
342	42	Descripcion 342	8
343	43	Descripcion 343	9
344	44	Descripcion 344	8
345	45	Descripcion 345	9
346	46	Descripcion 346	14
347	47	Descripcion 347	13
348	48	Descripcion 348	14
349	49	Descripcion 349	8
350	50	Descripcion 350	9
351	51	Descripcion 351	7
352	52	Descripcion 352	7
353	53	Descripcion 353	7
354	54	Descripcion 354	6
355	55	Descripcion 355	12
356	56	Descripcion 356	12
357	57	Descripcion 357	11
358	58	Descripcion 358	7
359	59	Descripcion 359	11
360	60	Descripcion 360	8
361	61	Descripcion 361	6
362	62	Descripcion 362	14
363	63	Descripcion 363	8
364	64	Descripcion 364	6
365	65	Descripcion 365	7
366	66	Descripcion 366	15
367	67	Descripcion 367	6
368	68	Descripcion 368	15
369	69	Descripcion 369	6
370	70	Descripcion 370	6
371	71	Descripcion 371	8
372	72	Descripcion 372	7
373	73	Descripcion 373	14
374	74	Descripcion 374	5
375	75	Descripcion 375	14
376	76	Descripcion 376	11
377	77	Descripcion 377	9
378	78	Descripcion 378	6
379	79	Descripcion 379	7
380	80	Descripcion 380	14
381	81	Descripcion 381	6
382	82	Descripcion 382	8
383	83	Descripcion 383	13
384	84	Descripcion 384	9
385	85	Descripcion 385	13
386	86	Descripcion 386	12
387	87	Descripcion 387	15
388	88	Descripcion 388	6
389	89	Descripcion 389	6
390	90	Descripcion 390	10
391	91	Descripcion 391	8
392	92	Descripcion 392	7
393	93	Descripcion 393	15
394	94	Descripcion 394	12
395	95	Descripcion 395	8
396	96	Descripcion 396	8
397	97	Descripcion 397	6
398	98	Descripcion 398	14
399	99	Descripcion 399	6
400	100	Descripcion 400	9
\.


--
-- Data for Name: calzadas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.calzadas (id, segmento_id, descripcion, longitud) FROM stdin;
1	1	Descripcion 1	134
2	2	Descripcion 2	44
3	3	Descripcion 3	117
4	4	Descripcion 4	29
5	5	Descripcion 5	80
6	6	Descripcion 6	38
7	7	Descripcion 7	126
8	8	Descripcion 8	103
9	9	Descripcion 9	42
10	10	Descripcion 10	139
11	11	Descripcion 11	77
12	12	Descripcion 12	30
13	13	Descripcion 13	65
14	14	Descripcion 14	21
15	15	Descripcion 15	60
16	16	Descripcion 16	88
17	17	Descripcion 17	58
18	18	Descripcion 18	96
19	19	Descripcion 19	18
20	20	Descripcion 20	98
21	21	Descripcion 21	74
22	22	Descripcion 22	59
23	23	Descripcion 23	85
24	24	Descripcion 24	117
25	25	Descripcion 25	147
26	26	Descripcion 26	147
27	27	Descripcion 27	46
28	28	Descripcion 28	116
29	29	Descripcion 29	131
30	30	Descripcion 30	42
31	31	Descripcion 31	136
32	32	Descripcion 32	20
33	33	Descripcion 33	127
34	34	Descripcion 34	94
35	35	Descripcion 35	46
36	36	Descripcion 36	106
37	37	Descripcion 37	32
38	38	Descripcion 38	47
39	39	Descripcion 39	77
40	40	Descripcion 40	24
41	41	Descripcion 41	42
42	42	Descripcion 42	108
43	43	Descripcion 43	130
44	44	Descripcion 44	71
45	45	Descripcion 45	149
46	46	Descripcion 46	143
47	47	Descripcion 47	45
48	48	Descripcion 48	141
49	49	Descripcion 49	89
50	50	Descripcion 50	146
51	51	Descripcion 51	142
52	52	Descripcion 52	109
53	53	Descripcion 53	26
54	54	Descripcion 54	104
55	55	Descripcion 55	34
56	56	Descripcion 56	30
57	57	Descripcion 57	41
58	58	Descripcion 58	54
59	59	Descripcion 59	22
60	60	Descripcion 60	60
61	61	Descripcion 61	87
62	62	Descripcion 62	109
63	63	Descripcion 63	30
64	64	Descripcion 64	70
65	65	Descripcion 65	67
66	66	Descripcion 66	55
67	67	Descripcion 67	137
68	68	Descripcion 68	57
69	69	Descripcion 69	28
70	70	Descripcion 70	46
71	71	Descripcion 71	139
72	72	Descripcion 72	135
73	73	Descripcion 73	132
74	74	Descripcion 74	93
75	75	Descripcion 75	142
76	76	Descripcion 76	21
77	77	Descripcion 77	88
78	78	Descripcion 78	144
79	79	Descripcion 79	55
80	80	Descripcion 80	148
81	81	Descripcion 81	111
82	82	Descripcion 82	74
83	83	Descripcion 83	76
84	84	Descripcion 84	94
85	85	Descripcion 85	47
86	86	Descripcion 86	32
87	87	Descripcion 87	57
88	88	Descripcion 88	123
89	89	Descripcion 89	93
90	90	Descripcion 90	109
91	91	Descripcion 91	52
92	92	Descripcion 92	69
93	93	Descripcion 93	49
94	94	Descripcion 94	54
95	95	Descripcion 95	83
96	96	Descripcion 96	40
97	97	Descripcion 97	79
98	98	Descripcion 98	144
99	99	Descripcion 99	116
100	100	Descripcion 100	37
101	1	Descripcion 101	121
102	2	Descripcion 102	32
103	3	Descripcion 103	52
104	4	Descripcion 104	24
105	5	Descripcion 105	17
106	6	Descripcion 106	21
107	7	Descripcion 107	77
108	8	Descripcion 108	33
109	9	Descripcion 109	84
110	10	Descripcion 110	136
111	11	Descripcion 111	54
112	12	Descripcion 112	67
113	13	Descripcion 113	80
114	14	Descripcion 114	66
115	15	Descripcion 115	129
116	16	Descripcion 116	111
117	17	Descripcion 117	47
118	18	Descripcion 118	40
119	19	Descripcion 119	102
120	20	Descripcion 120	61
121	21	Descripcion 121	130
122	22	Descripcion 122	104
123	23	Descripcion 123	25
124	24	Descripcion 124	82
125	25	Descripcion 125	71
126	26	Descripcion 126	53
127	27	Descripcion 127	114
128	28	Descripcion 128	121
129	29	Descripcion 129	131
130	30	Descripcion 130	26
131	31	Descripcion 131	117
132	32	Descripcion 132	23
133	33	Descripcion 133	39
134	34	Descripcion 134	57
135	35	Descripcion 135	25
136	36	Descripcion 136	133
137	37	Descripcion 137	89
138	38	Descripcion 138	134
139	39	Descripcion 139	36
140	40	Descripcion 140	86
141	41	Descripcion 141	93
142	42	Descripcion 142	43
143	43	Descripcion 143	115
144	44	Descripcion 144	39
145	45	Descripcion 145	82
146	46	Descripcion 146	140
147	47	Descripcion 147	137
148	48	Descripcion 148	134
149	49	Descripcion 149	35
150	50	Descripcion 150	74
151	51	Descripcion 151	71
152	52	Descripcion 152	145
153	53	Descripcion 153	137
154	54	Descripcion 154	126
155	55	Descripcion 155	41
156	56	Descripcion 156	66
157	57	Descripcion 157	138
158	58	Descripcion 158	36
159	59	Descripcion 159	91
160	60	Descripcion 160	27
161	61	Descripcion 161	89
162	62	Descripcion 162	66
163	63	Descripcion 163	86
164	64	Descripcion 164	101
165	65	Descripcion 165	120
166	66	Descripcion 166	124
167	67	Descripcion 167	76
168	68	Descripcion 168	99
169	69	Descripcion 169	134
170	70	Descripcion 170	71
171	71	Descripcion 171	71
172	72	Descripcion 172	104
173	73	Descripcion 173	23
174	74	Descripcion 174	110
175	75	Descripcion 175	145
176	76	Descripcion 176	133
177	77	Descripcion 177	112
178	78	Descripcion 178	105
179	79	Descripcion 179	69
180	80	Descripcion 180	52
181	81	Descripcion 181	112
182	82	Descripcion 182	120
183	83	Descripcion 183	36
184	84	Descripcion 184	44
185	85	Descripcion 185	28
186	86	Descripcion 186	25
187	87	Descripcion 187	99
188	88	Descripcion 188	51
189	89	Descripcion 189	43
190	90	Descripcion 190	135
191	91	Descripcion 191	52
192	92	Descripcion 192	141
193	93	Descripcion 193	108
194	94	Descripcion 194	143
195	95	Descripcion 195	149
196	96	Descripcion 196	42
197	97	Descripcion 197	107
198	98	Descripcion 198	103
199	99	Descripcion 199	114
200	100	Descripcion 200	94
\.


--
-- Data for Name: segmentos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.segmentos (id, numero, longitud, nomenclatura) FROM stdin;
1	1	241	Nomenclatura 1
2	2	94	Nomenclatura 2
3	3	226	Nomenclatura 3
4	4	204	Nomenclatura 4
5	5	68	Nomenclatura 5
6	6	220	Nomenclatura 6
7	7	86	Nomenclatura 7
8	8	122	Nomenclatura 8
9	9	249	Nomenclatura 9
10	10	110	Nomenclatura 10
11	11	205	Nomenclatura 11
12	12	169	Nomenclatura 12
13	13	237	Nomenclatura 13
14	14	89	Nomenclatura 14
15	15	148	Nomenclatura 15
16	16	165	Nomenclatura 16
17	17	104	Nomenclatura 17
18	18	161	Nomenclatura 18
19	19	248	Nomenclatura 19
20	20	142	Nomenclatura 20
21	21	63	Nomenclatura 21
22	22	170	Nomenclatura 22
23	23	235	Nomenclatura 23
24	24	204	Nomenclatura 24
25	25	176	Nomenclatura 25
26	26	162	Nomenclatura 26
27	27	182	Nomenclatura 27
28	28	163	Nomenclatura 28
29	29	63	Nomenclatura 29
30	30	117	Nomenclatura 30
31	31	93	Nomenclatura 31
32	32	210	Nomenclatura 32
33	33	161	Nomenclatura 33
34	34	163	Nomenclatura 34
35	35	188	Nomenclatura 35
36	36	249	Nomenclatura 36
37	37	159	Nomenclatura 37
38	38	151	Nomenclatura 38
39	39	59	Nomenclatura 39
40	40	71	Nomenclatura 40
41	41	234	Nomenclatura 41
42	42	192	Nomenclatura 42
43	43	100	Nomenclatura 43
44	44	70	Nomenclatura 44
45	45	106	Nomenclatura 45
46	46	130	Nomenclatura 46
47	47	133	Nomenclatura 47
48	48	72	Nomenclatura 48
49	49	248	Nomenclatura 49
50	50	79	Nomenclatura 50
51	51	195	Nomenclatura 51
52	52	151	Nomenclatura 52
53	53	188	Nomenclatura 53
54	54	64	Nomenclatura 54
55	55	198	Nomenclatura 55
56	56	60	Nomenclatura 56
57	57	158	Nomenclatura 57
58	58	137	Nomenclatura 58
59	59	110	Nomenclatura 59
60	60	95	Nomenclatura 60
61	61	229	Nomenclatura 61
62	62	140	Nomenclatura 62
63	63	193	Nomenclatura 63
64	64	143	Nomenclatura 64
65	65	90	Nomenclatura 65
66	66	188	Nomenclatura 66
67	67	79	Nomenclatura 67
68	68	134	Nomenclatura 68
69	69	50	Nomenclatura 69
70	70	237	Nomenclatura 70
71	71	72	Nomenclatura 71
72	72	193	Nomenclatura 72
73	73	109	Nomenclatura 73
74	74	135	Nomenclatura 74
75	75	103	Nomenclatura 75
76	76	193	Nomenclatura 76
77	77	227	Nomenclatura 77
78	78	112	Nomenclatura 78
79	79	117	Nomenclatura 79
80	80	209	Nomenclatura 80
81	81	88	Nomenclatura 81
82	82	162	Nomenclatura 82
83	83	78	Nomenclatura 83
84	84	94	Nomenclatura 84
85	85	57	Nomenclatura 85
86	86	109	Nomenclatura 86
87	87	204	Nomenclatura 87
88	88	101	Nomenclatura 88
89	89	218	Nomenclatura 89
90	90	154	Nomenclatura 90
91	91	133	Nomenclatura 91
92	92	245	Nomenclatura 92
93	93	157	Nomenclatura 93
94	94	187	Nomenclatura 94
95	95	190	Nomenclatura 95
96	96	241	Nomenclatura 96
97	97	227	Nomenclatura 97
98	98	57	Nomenclatura 98
99	99	198	Nomenclatura 99
100	100	138	Nomenclatura 100
\.


--
-- Name: bordillos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.bordillos_id_seq', 400, true);


--
-- Name: calzadas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.calzadas_id_seq', 200, true);


--
-- Name: segmentos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.segmentos_id_seq', 100, true);


--
-- Name: bordillos bordillos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bordillos
    ADD CONSTRAINT bordillos_pkey PRIMARY KEY (id);


--
-- Name: calzadas calzadas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.calzadas
    ADD CONSTRAINT calzadas_pkey PRIMARY KEY (id);


--
-- Name: segmentos segmentos_numero_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.segmentos
    ADD CONSTRAINT segmentos_numero_key UNIQUE (numero);


--
-- Name: segmentos segmentos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.segmentos
    ADD CONSTRAINT segmentos_pkey PRIMARY KEY (id);


--
-- Name: bordillos bordillos_segmento_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bordillos
    ADD CONSTRAINT bordillos_segmento_id_fkey FOREIGN KEY (segmento_id) REFERENCES public.segmentos(id) ON DELETE CASCADE;


--
-- Name: calzadas calzadas_segmento_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.calzadas
    ADD CONSTRAINT calzadas_segmento_id_fkey FOREIGN KEY (segmento_id) REFERENCES public.segmentos(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

