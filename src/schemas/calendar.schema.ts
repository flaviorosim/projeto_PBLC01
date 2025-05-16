/**
 * @openapi
 * components:
 *   schemas:
 *     Calendar:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         availability:
 *           type: array
 *           items:
 *             type: string
 *             format: date-time
 *         hostId:
 *           type: integer
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *     CalendarInput:
 *       type: object
 *       required:
 *         - availability
 *         - hostId
 *       properties:
 *         availability:
 *           type: array
 *           items:
 *             type: string
 *             format: date-time
 *         hostId:
 *           type: integer
 */

/**
 * @openapi
 * /calendars:
 *   get:
 *     tags: [Calendars]
 *     summary: List all calendars
 *     responses:
 *       200:
 *         description: List of calendars
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Calendar'
 *   post:
 *     tags: [Calendars]
 *     summary: Create a new calendar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CalendarInput'
 *     responses:
 *       201:
 *         description: Calendar created
 *       400:
 *         description: Invalid input
 */

/**
 * @openapi
 * /calendars/{id}:
 *   get:
 *     tags: [Calendars]
 *     summary: Get a calendar by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Calendar found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Calendar'
 *       404:
 *         description: Calendar not found
 *   put:
 *     tags: [Calendars]
 *     summary: Update a calendar
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CalendarInput'
 *     responses:
 *       200:
 *         description: Calendar updated
 *       404:
 *         description: Calendar not found
 *   delete:
 *     tags: [Calendars]
 *     summary: Delete a calendar
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Calendar deleted
 *       404:
 *         description: Calendar not found
 */

/**
 * @openapi
 * /calendars/{id}/check-availability:
 *   post:
 *     tags: [Calendars]
 *     summary: Check calendar availability for dates
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               beginDate:
 *                 type: string
 *                 format: date-time
 *               endDate:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       200:
 *         description: Availability check result
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 isAvailable:
 *                   type: boolean
 *       404:
 *         description: Calendar not found
 */